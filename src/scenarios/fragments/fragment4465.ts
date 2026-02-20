import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4463 } from "./fragment4463";
import type { FragmentToken4464 } from "./fragment4464";

export const FRAGMENT_4465 = gql(`
  fragment Fragment4465 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult4465 = ResultOf<typeof FRAGMENT_4465>;
type FragmentSelf4465 = NonNullable<FragmentResult4465>;

export type FragmentToken4465 =
  | FragmentSelf4465["__typename"]
  | FragmentSelf4465["typenameHint"] | FragmentToken4463 | FragmentToken4464;
