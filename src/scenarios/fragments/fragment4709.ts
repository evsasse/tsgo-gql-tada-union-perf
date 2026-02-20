import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4707 } from "./fragment4707";
import type { FragmentToken4708 } from "./fragment4708";

export const FRAGMENT_4709 = gql(`
  fragment Fragment4709 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult4709 = ResultOf<typeof FRAGMENT_4709>;
type FragmentSelf4709 = NonNullable<FragmentResult4709>;

export type FragmentToken4709 =
  | FragmentSelf4709["__typename"]
  | FragmentSelf4709["typenameHint"] | FragmentToken4707 | FragmentToken4708;
