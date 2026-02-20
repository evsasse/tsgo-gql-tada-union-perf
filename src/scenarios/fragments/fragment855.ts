import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken853 } from "./fragment853";
import type { FragmentToken854 } from "./fragment854";

export const FRAGMENT_855 = gql(`
  fragment Fragment855 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult855 = ResultOf<typeof FRAGMENT_855>;
type FragmentSelf855 = NonNullable<FragmentResult855>;

export type FragmentToken855 =
  | FragmentSelf855["__typename"]
  | FragmentSelf855["typenameHint"] | FragmentToken853 | FragmentToken854;
