import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken761 } from "./fragment761";
import type { FragmentToken762 } from "./fragment762";

export const FRAGMENT_763 = gql(`
  fragment Fragment763 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult763 = ResultOf<typeof FRAGMENT_763>;
type FragmentSelf763 = NonNullable<FragmentResult763>;

export type FragmentToken763 =
  | FragmentSelf763["__typename"]
  | FragmentSelf763["typenameHint"] | FragmentToken761 | FragmentToken762;
