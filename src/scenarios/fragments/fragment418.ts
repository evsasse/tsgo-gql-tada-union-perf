import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken416 } from "./fragment416";
import type { FragmentToken417 } from "./fragment417";

export const FRAGMENT_418 = gql(`
  fragment Fragment418 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult418 = ResultOf<typeof FRAGMENT_418>;
type FragmentSelf418 = NonNullable<FragmentResult418>;

export type FragmentToken418 =
  | FragmentSelf418["__typename"]
  | FragmentSelf418["typenameHint"] | FragmentToken416 | FragmentToken417;
