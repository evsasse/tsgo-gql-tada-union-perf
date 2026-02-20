import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken171 } from "./fragment171";
import type { FragmentToken172 } from "./fragment172";

export const FRAGMENT_173 = gql(`
  fragment Fragment173 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult173 = ResultOf<typeof FRAGMENT_173>;
type FragmentSelf173 = NonNullable<FragmentResult173>;

export type FragmentToken173 =
  | FragmentSelf173["__typename"]
  | FragmentSelf173["typenameHint"] | FragmentToken171 | FragmentToken172;
