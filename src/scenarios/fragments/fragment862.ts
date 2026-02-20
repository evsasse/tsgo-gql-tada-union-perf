import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken860 } from "./fragment860";
import type { FragmentToken861 } from "./fragment861";

export const FRAGMENT_862 = gql(`
  fragment Fragment862 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult862 = ResultOf<typeof FRAGMENT_862>;
type FragmentSelf862 = NonNullable<FragmentResult862>;

export type FragmentToken862 =
  | FragmentSelf862["__typename"]
  | FragmentSelf862["typenameHint"] | FragmentToken860 | FragmentToken861;
