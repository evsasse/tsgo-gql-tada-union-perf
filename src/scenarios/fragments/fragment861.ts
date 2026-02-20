import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken859 } from "./fragment859";
import type { FragmentToken860 } from "./fragment860";

export const FRAGMENT_861 = gql(`
  fragment Fragment861 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult861 = ResultOf<typeof FRAGMENT_861>;
type FragmentSelf861 = NonNullable<FragmentResult861>;

export type FragmentToken861 =
  | FragmentSelf861["__typename"]
  | FragmentSelf861["typenameHint"] | FragmentToken859 | FragmentToken860;
