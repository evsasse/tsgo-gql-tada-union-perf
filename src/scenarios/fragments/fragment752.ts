import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken750 } from "./fragment750";
import type { FragmentToken751 } from "./fragment751";

export const FRAGMENT_752 = gql(`
  fragment Fragment752 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult752 = ResultOf<typeof FRAGMENT_752>;
type FragmentSelf752 = NonNullable<FragmentResult752>;

export type FragmentToken752 =
  | FragmentSelf752["__typename"]
  | FragmentSelf752["typenameHint"] | FragmentToken750 | FragmentToken751;
