import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken288 } from "./fragment288";
import type { FragmentToken289 } from "./fragment289";

export const FRAGMENT_290 = gql(`
  fragment Fragment290 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult290 = ResultOf<typeof FRAGMENT_290>;
type FragmentSelf290 = NonNullable<FragmentResult290>;

export type FragmentToken290 =
  | FragmentSelf290["__typename"]
  | FragmentSelf290["typenameHint"] | FragmentToken288 | FragmentToken289;
