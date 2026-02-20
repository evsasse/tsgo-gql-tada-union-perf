import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken118 } from "./fragment118";
import type { FragmentToken119 } from "./fragment119";

export const FRAGMENT_120 = gql(`
  fragment Fragment120 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult120 = ResultOf<typeof FRAGMENT_120>;
type FragmentSelf120 = NonNullable<FragmentResult120>;

export type FragmentToken120 =
  | FragmentSelf120["__typename"]
  | FragmentSelf120["typenameHint"] | FragmentToken118 | FragmentToken119;
