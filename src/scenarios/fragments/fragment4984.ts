import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4982 } from "./fragment4982";
import type { FragmentToken4983 } from "./fragment4983";

export const FRAGMENT_4984 = gql(`
  fragment Fragment4984 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult4984 = ResultOf<typeof FRAGMENT_4984>;
type FragmentSelf4984 = NonNullable<FragmentResult4984>;

export type FragmentToken4984 =
  | FragmentSelf4984["__typename"]
  | FragmentSelf4984["typenameHint"] | FragmentToken4982 | FragmentToken4983;
