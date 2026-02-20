import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken320 } from "./fragment320";
import type { FragmentToken321 } from "./fragment321";

export const FRAGMENT_322 = gql(`
  fragment Fragment322 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult322 = ResultOf<typeof FRAGMENT_322>;
type FragmentSelf322 = NonNullable<FragmentResult322>;

export type FragmentToken322 =
  | FragmentSelf322["__typename"]
  | FragmentSelf322["typenameHint"] | FragmentToken320 | FragmentToken321;
