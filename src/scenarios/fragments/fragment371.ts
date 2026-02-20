import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken369 } from "./fragment369";
import type { FragmentToken370 } from "./fragment370";

export const FRAGMENT_371 = gql(`
  fragment Fragment371 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult371 = ResultOf<typeof FRAGMENT_371>;
type FragmentSelf371 = NonNullable<FragmentResult371>;

export type FragmentToken371 =
  | FragmentSelf371["__typename"]
  | FragmentSelf371["typenameHint"] | FragmentToken369 | FragmentToken370;
