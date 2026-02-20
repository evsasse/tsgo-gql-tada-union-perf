import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken366 } from "./fragment366";
import type { FragmentToken367 } from "./fragment367";

export const FRAGMENT_368 = gql(`
  fragment Fragment368 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult368 = ResultOf<typeof FRAGMENT_368>;
type FragmentSelf368 = NonNullable<FragmentResult368>;

export type FragmentToken368 =
  | FragmentSelf368["__typename"]
  | FragmentSelf368["typenameHint"] | FragmentToken366 | FragmentToken367;
