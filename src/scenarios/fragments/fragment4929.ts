import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4927 } from "./fragment4927";
import type { FragmentToken4928 } from "./fragment4928";

export const FRAGMENT_4929 = gql(`
  fragment Fragment4929 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult4929 = ResultOf<typeof FRAGMENT_4929>;
type FragmentSelf4929 = NonNullable<FragmentResult4929>;

export type FragmentToken4929 =
  | FragmentSelf4929["__typename"]
  | FragmentSelf4929["typenameHint"] | FragmentToken4927 | FragmentToken4928;
