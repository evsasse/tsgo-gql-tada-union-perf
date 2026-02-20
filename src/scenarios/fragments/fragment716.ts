import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken714 } from "./fragment714";
import type { FragmentToken715 } from "./fragment715";

export const FRAGMENT_716 = gql(`
  fragment Fragment716 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult716 = ResultOf<typeof FRAGMENT_716>;
type FragmentSelf716 = NonNullable<FragmentResult716>;

export type FragmentToken716 =
  | FragmentSelf716["__typename"]
  | FragmentSelf716["typenameHint"] | FragmentToken714 | FragmentToken715;
