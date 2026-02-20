import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken042 } from "./fragment042";
import type { FragmentToken043 } from "./fragment043";

export const FRAGMENT_044 = gql(`
  fragment Fragment044 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult044 = ResultOf<typeof FRAGMENT_044>;
type FragmentSelf044 = NonNullable<FragmentResult044>;

export type FragmentToken044 =
  | FragmentSelf044["__typename"]
  | FragmentSelf044["typenameHint"] | FragmentToken042 | FragmentToken043;
