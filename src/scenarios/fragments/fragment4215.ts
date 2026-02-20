import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4213 } from "./fragment4213";
import type { FragmentToken4214 } from "./fragment4214";

export const FRAGMENT_4215 = gql(`
  fragment Fragment4215 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult4215 = ResultOf<typeof FRAGMENT_4215>;
type FragmentSelf4215 = NonNullable<FragmentResult4215>;

export type FragmentToken4215 =
  | FragmentSelf4215["__typename"]
  | FragmentSelf4215["typenameHint"] | FragmentToken4213 | FragmentToken4214;
