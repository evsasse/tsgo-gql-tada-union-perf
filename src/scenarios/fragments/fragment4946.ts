import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4944 } from "./fragment4944";
import type { FragmentToken4945 } from "./fragment4945";

export const FRAGMENT_4946 = gql(`
  fragment Fragment4946 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult4946 = ResultOf<typeof FRAGMENT_4946>;
type FragmentSelf4946 = NonNullable<FragmentResult4946>;

export type FragmentToken4946 =
  | FragmentSelf4946["__typename"]
  | FragmentSelf4946["typenameHint"] | FragmentToken4944 | FragmentToken4945;
