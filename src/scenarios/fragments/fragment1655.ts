import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1653 } from "./fragment1653";
import type { FragmentToken1654 } from "./fragment1654";

export const FRAGMENT_1655 = gql(`
  fragment Fragment1655 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult1655 = ResultOf<typeof FRAGMENT_1655>;
type FragmentSelf1655 = NonNullable<FragmentResult1655>;

export type FragmentToken1655 =
  | FragmentSelf1655["__typename"]
  | FragmentSelf1655["typenameHint"] | FragmentToken1653 | FragmentToken1654;
