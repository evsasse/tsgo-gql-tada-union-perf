import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken189 } from "./fragment189";
import type { FragmentToken190 } from "./fragment190";

export const FRAGMENT_191 = gql(`
  fragment Fragment191 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult191 = ResultOf<typeof FRAGMENT_191>;
type FragmentSelf191 = NonNullable<FragmentResult191>;

export type FragmentToken191 =
  | FragmentSelf191["__typename"]
  | FragmentSelf191["typenameHint"] | FragmentToken189 | FragmentToken190;
