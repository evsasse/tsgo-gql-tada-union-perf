import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4531 } from "./fragment4531";
import type { FragmentToken4532 } from "./fragment4532";

export const FRAGMENT_4533 = gql(`
  fragment Fragment4533 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult4533 = ResultOf<typeof FRAGMENT_4533>;
type FragmentSelf4533 = NonNullable<FragmentResult4533>;

export type FragmentToken4533 =
  | FragmentSelf4533["__typename"]
  | FragmentSelf4533["typenameHint"] | FragmentToken4531 | FragmentToken4532;
