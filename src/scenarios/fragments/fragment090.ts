import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken088 } from "./fragment088";
import type { FragmentToken089 } from "./fragment089";

export const FRAGMENT_090 = gql(`
  fragment Fragment090 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult090 = ResultOf<typeof FRAGMENT_090>;
type FragmentSelf090 = NonNullable<FragmentResult090>;

export type FragmentToken090 =
  | FragmentSelf090["__typename"]
  | FragmentSelf090["typenameHint"] | FragmentToken088 | FragmentToken089;
