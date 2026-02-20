import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4475 } from "./fragment4475";
import type { FragmentToken4476 } from "./fragment4476";

export const FRAGMENT_4477 = gql(`
  fragment Fragment4477 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult4477 = ResultOf<typeof FRAGMENT_4477>;
type FragmentSelf4477 = NonNullable<FragmentResult4477>;

export type FragmentToken4477 =
  | FragmentSelf4477["__typename"]
  | FragmentSelf4477["typenameHint"] | FragmentToken4475 | FragmentToken4476;
