import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken144 } from "./fragment144";
import type { FragmentToken145 } from "./fragment145";

export const FRAGMENT_146 = gql(`
  fragment Fragment146 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult146 = ResultOf<typeof FRAGMENT_146>;
type FragmentSelf146 = NonNullable<FragmentResult146>;

export type FragmentToken146 =
  | FragmentSelf146["__typename"]
  | FragmentSelf146["typenameHint"] | FragmentToken144 | FragmentToken145;
