import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken169 } from "./fragment169";
import type { FragmentToken170 } from "./fragment170";

export const FRAGMENT_171 = gql(`
  fragment Fragment171 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult171 = ResultOf<typeof FRAGMENT_171>;
type FragmentSelf171 = NonNullable<FragmentResult171>;

export type FragmentToken171 =
  | FragmentSelf171["__typename"]
  | FragmentSelf171["typenameHint"] | FragmentToken169 | FragmentToken170;
