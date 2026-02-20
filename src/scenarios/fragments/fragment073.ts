import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken071 } from "./fragment071";
import type { FragmentToken072 } from "./fragment072";

export const FRAGMENT_073 = gql(`
  fragment Fragment073 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult073 = ResultOf<typeof FRAGMENT_073>;
type FragmentSelf073 = NonNullable<FragmentResult073>;

export type FragmentToken073 =
  | FragmentSelf073["__typename"]
  | FragmentSelf073["typenameHint"] | FragmentToken071 | FragmentToken072;
