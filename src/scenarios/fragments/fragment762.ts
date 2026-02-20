import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken760 } from "./fragment760";
import type { FragmentToken761 } from "./fragment761";

export const FRAGMENT_762 = gql(`
  fragment Fragment762 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult762 = ResultOf<typeof FRAGMENT_762>;
type FragmentSelf762 = NonNullable<FragmentResult762>;

export type FragmentToken762 =
  | FragmentSelf762["__typename"]
  | FragmentSelf762["typenameHint"] | FragmentToken760 | FragmentToken761;
