import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken030 } from "./fragment030";
import type { FragmentToken031 } from "./fragment031";

export const FRAGMENT_032 = gql(`
  fragment Fragment032 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult032 = ResultOf<typeof FRAGMENT_032>;
type FragmentSelf032 = NonNullable<FragmentResult032>;

export type FragmentToken032 =
  | FragmentSelf032["__typename"]
  | FragmentSelf032["typenameHint"] | FragmentToken030 | FragmentToken031;
