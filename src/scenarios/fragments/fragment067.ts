import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken065 } from "./fragment065";
import type { FragmentToken066 } from "./fragment066";

export const FRAGMENT_067 = gql(`
  fragment Fragment067 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult067 = ResultOf<typeof FRAGMENT_067>;
type FragmentSelf067 = NonNullable<FragmentResult067>;

export type FragmentToken067 =
  | FragmentSelf067["__typename"]
  | FragmentSelf067["typenameHint"] | FragmentToken065 | FragmentToken066;
