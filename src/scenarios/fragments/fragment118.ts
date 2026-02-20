import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken116 } from "./fragment116";
import type { FragmentToken117 } from "./fragment117";

export const FRAGMENT_118 = gql(`
  fragment Fragment118 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult118 = ResultOf<typeof FRAGMENT_118>;
type FragmentSelf118 = NonNullable<FragmentResult118>;

export type FragmentToken118 =
  | FragmentSelf118["__typename"]
  | FragmentSelf118["typenameHint"] | FragmentToken116 | FragmentToken117;
