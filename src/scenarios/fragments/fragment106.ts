import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken104 } from "./fragment104";
import type { FragmentToken105 } from "./fragment105";

export const FRAGMENT_106 = gql(`
  fragment Fragment106 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult106 = ResultOf<typeof FRAGMENT_106>;
type FragmentSelf106 = NonNullable<FragmentResult106>;

export type FragmentToken106 =
  | FragmentSelf106["__typename"]
  | FragmentSelf106["typenameHint"] | FragmentToken104 | FragmentToken105;
