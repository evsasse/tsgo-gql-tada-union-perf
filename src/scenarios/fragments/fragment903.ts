import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken901 } from "./fragment901";
import type { FragmentToken902 } from "./fragment902";

export const FRAGMENT_903 = gql(`
  fragment Fragment903 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult903 = ResultOf<typeof FRAGMENT_903>;
type FragmentSelf903 = NonNullable<FragmentResult903>;

export type FragmentToken903 =
  | FragmentSelf903["__typename"]
  | FragmentSelf903["typenameHint"] | FragmentToken901 | FragmentToken902;
