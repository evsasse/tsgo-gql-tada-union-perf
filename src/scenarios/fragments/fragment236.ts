import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken234 } from "./fragment234";
import type { FragmentToken235 } from "./fragment235";

export const FRAGMENT_236 = gql(`
  fragment Fragment236 on Member235 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_235
    memberCount_235
    memberMetric_235
  }
`);

type FragmentResult236 = ResultOf<typeof FRAGMENT_236>;
type FragmentSelf236 = NonNullable<FragmentResult236>;

export type FragmentToken236 =
  | FragmentSelf236["__typename"]
  | FragmentSelf236["typenameHint"] | FragmentToken234 | FragmentToken235;
