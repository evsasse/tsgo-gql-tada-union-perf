import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4425 } from "./fragment4425";
import type { FragmentToken4426 } from "./fragment4426";

export const FRAGMENT_4427 = gql(`
  fragment Fragment4427 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult4427 = ResultOf<typeof FRAGMENT_4427>;
type FragmentSelf4427 = NonNullable<FragmentResult4427>;

export type FragmentToken4427 =
  | FragmentSelf4427["__typename"]
  | FragmentSelf4427["typenameHint"] | FragmentToken4425 | FragmentToken4426;
