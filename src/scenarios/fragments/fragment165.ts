import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken163 } from "./fragment163";
import type { FragmentToken164 } from "./fragment164";

export const FRAGMENT_165 = gql(`
  fragment Fragment165 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult165 = ResultOf<typeof FRAGMENT_165>;
type FragmentSelf165 = NonNullable<FragmentResult165>;

export type FragmentToken165 =
  | FragmentSelf165["__typename"]
  | FragmentSelf165["typenameHint"] | FragmentToken163 | FragmentToken164;
