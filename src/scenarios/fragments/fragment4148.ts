import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4146 } from "./fragment4146";
import type { FragmentToken4147 } from "./fragment4147";

export const FRAGMENT_4148 = gql(`
  fragment Fragment4148 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult4148 = ResultOf<typeof FRAGMENT_4148>;
type FragmentSelf4148 = NonNullable<FragmentResult4148>;

export type FragmentToken4148 =
  | FragmentSelf4148["__typename"]
  | FragmentSelf4148["typenameHint"] | FragmentToken4146 | FragmentToken4147;
