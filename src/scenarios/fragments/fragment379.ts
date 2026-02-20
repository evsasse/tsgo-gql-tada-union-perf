import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken377 } from "./fragment377";
import type { FragmentToken378 } from "./fragment378";

export const FRAGMENT_379 = gql(`
  fragment Fragment379 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult379 = ResultOf<typeof FRAGMENT_379>;
type FragmentSelf379 = NonNullable<FragmentResult379>;

export type FragmentToken379 =
  | FragmentSelf379["__typename"]
  | FragmentSelf379["typenameHint"] | FragmentToken377 | FragmentToken378;
