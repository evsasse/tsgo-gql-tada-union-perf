import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken550 } from "./fragment550";
import type { FragmentToken551 } from "./fragment551";

export const FRAGMENT_552 = gql(`
  fragment Fragment552 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult552 = ResultOf<typeof FRAGMENT_552>;
type FragmentSelf552 = NonNullable<FragmentResult552>;

export type FragmentToken552 =
  | FragmentSelf552["__typename"]
  | FragmentSelf552["typenameHint"] | FragmentToken550 | FragmentToken551;
