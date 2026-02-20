import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken798 } from "./fragment798";
import type { FragmentToken799 } from "./fragment799";

export const FRAGMENT_800 = gql(`
  fragment Fragment800 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult800 = ResultOf<typeof FRAGMENT_800>;
type FragmentSelf800 = NonNullable<FragmentResult800>;

export type FragmentToken800 =
  | FragmentSelf800["__typename"]
  | FragmentSelf800["typenameHint"] | FragmentToken798 | FragmentToken799;
