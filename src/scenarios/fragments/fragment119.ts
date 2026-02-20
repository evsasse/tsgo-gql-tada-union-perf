import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken117 } from "./fragment117";
import type { FragmentToken118 } from "./fragment118";

export const FRAGMENT_119 = gql(`
  fragment Fragment119 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult119 = ResultOf<typeof FRAGMENT_119>;
type FragmentSelf119 = NonNullable<FragmentResult119>;

export type FragmentToken119 =
  | FragmentSelf119["__typename"]
  | FragmentSelf119["typenameHint"] | FragmentToken117 | FragmentToken118;
