import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4803 } from "./fragment4803";
import type { FragmentToken4804 } from "./fragment4804";

export const FRAGMENT_4805 = gql(`
  fragment Fragment4805 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult4805 = ResultOf<typeof FRAGMENT_4805>;
type FragmentSelf4805 = NonNullable<FragmentResult4805>;

export type FragmentToken4805 =
  | FragmentSelf4805["__typename"]
  | FragmentSelf4805["typenameHint"] | FragmentToken4803 | FragmentToken4804;
