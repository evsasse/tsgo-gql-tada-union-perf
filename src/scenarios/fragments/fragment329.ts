import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken327 } from "./fragment327";
import type { FragmentToken328 } from "./fragment328";

export const FRAGMENT_329 = gql(`
  fragment Fragment329 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult329 = ResultOf<typeof FRAGMENT_329>;
type FragmentSelf329 = NonNullable<FragmentResult329>;

export type FragmentToken329 =
  | FragmentSelf329["__typename"]
  | FragmentSelf329["typenameHint"] | FragmentToken327 | FragmentToken328;
