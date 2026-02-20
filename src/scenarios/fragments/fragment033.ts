import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken031 } from "./fragment031";
import type { FragmentToken032 } from "./fragment032";

export const FRAGMENT_033 = gql(`
  fragment Fragment033 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult033 = ResultOf<typeof FRAGMENT_033>;
type FragmentSelf033 = NonNullable<FragmentResult033>;

export type FragmentToken033 =
  | FragmentSelf033["__typename"]
  | FragmentSelf033["typenameHint"] | FragmentToken031 | FragmentToken032;
