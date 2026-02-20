import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken133 } from "./fragment133";
import type { FragmentToken134 } from "./fragment134";

export const FRAGMENT_135 = gql(`
  fragment Fragment135 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult135 = ResultOf<typeof FRAGMENT_135>;
type FragmentSelf135 = NonNullable<FragmentResult135>;

export type FragmentToken135 =
  | FragmentSelf135["__typename"]
  | FragmentSelf135["typenameHint"] | FragmentToken133 | FragmentToken134;
