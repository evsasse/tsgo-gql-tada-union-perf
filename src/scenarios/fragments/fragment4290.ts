import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4288 } from "./fragment4288";
import type { FragmentToken4289 } from "./fragment4289";

export const FRAGMENT_4290 = gql(`
  fragment Fragment4290 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult4290 = ResultOf<typeof FRAGMENT_4290>;
type FragmentSelf4290 = NonNullable<FragmentResult4290>;

export type FragmentToken4290 =
  | FragmentSelf4290["__typename"]
  | FragmentSelf4290["typenameHint"] | FragmentToken4288 | FragmentToken4289;
