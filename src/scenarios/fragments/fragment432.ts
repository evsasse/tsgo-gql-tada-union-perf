import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken430 } from "./fragment430";
import type { FragmentToken431 } from "./fragment431";

export const FRAGMENT_432 = gql(`
  fragment Fragment432 on Member151 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_151
    memberCount_151
    memberMetric_151
  }
`);

type FragmentResult432 = ResultOf<typeof FRAGMENT_432>;
type FragmentSelf432 = NonNullable<FragmentResult432>;

export type FragmentToken432 =
  | FragmentSelf432["__typename"]
  | FragmentSelf432["typenameHint"] | FragmentToken430 | FragmentToken431;
