import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken158 } from "./fragment158";
import type { FragmentToken159 } from "./fragment159";

export const FRAGMENT_160 = gql(`
  fragment Fragment160 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult160 = ResultOf<typeof FRAGMENT_160>;
type FragmentSelf160 = NonNullable<FragmentResult160>;

export type FragmentToken160 =
  | FragmentSelf160["__typename"]
  | FragmentSelf160["typenameHint"] | FragmentToken158 | FragmentToken159;
