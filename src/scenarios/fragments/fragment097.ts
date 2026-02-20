import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken095 } from "./fragment095";
import type { FragmentToken096 } from "./fragment096";

export const FRAGMENT_097 = gql(`
  fragment Fragment097 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult097 = ResultOf<typeof FRAGMENT_097>;
type FragmentSelf097 = NonNullable<FragmentResult097>;

export type FragmentToken097 =
  | FragmentSelf097["__typename"]
  | FragmentSelf097["typenameHint"] | FragmentToken095 | FragmentToken096;
