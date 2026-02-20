import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken751 } from "./fragment751";
import type { FragmentToken752 } from "./fragment752";

export const FRAGMENT_753 = gql(`
  fragment Fragment753 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult753 = ResultOf<typeof FRAGMENT_753>;
type FragmentSelf753 = NonNullable<FragmentResult753>;

export type FragmentToken753 =
  | FragmentSelf753["__typename"]
  | FragmentSelf753["typenameHint"] | FragmentToken751 | FragmentToken752;
