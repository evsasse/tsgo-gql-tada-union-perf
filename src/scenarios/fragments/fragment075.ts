import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken073 } from "./fragment073";
import type { FragmentToken074 } from "./fragment074";

export const FRAGMENT_075 = gql(`
  fragment Fragment075 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult075 = ResultOf<typeof FRAGMENT_075>;
type FragmentSelf075 = NonNullable<FragmentResult075>;

export type FragmentToken075 =
  | FragmentSelf075["__typename"]
  | FragmentSelf075["typenameHint"] | FragmentToken073 | FragmentToken074;
