import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4490 } from "./fragment4490";
import type { FragmentToken4491 } from "./fragment4491";

export const FRAGMENT_4492 = gql(`
  fragment Fragment4492 on Member11 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_11
    memberCount_11
    memberMetric_11
  }
`);

type FragmentResult4492 = ResultOf<typeof FRAGMENT_4492>;
type FragmentSelf4492 = NonNullable<FragmentResult4492>;

export type FragmentToken4492 =
  | FragmentSelf4492["__typename"]
  | FragmentSelf4492["typenameHint"] | FragmentToken4490 | FragmentToken4491;
