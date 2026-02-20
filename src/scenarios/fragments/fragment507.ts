import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken505 } from "./fragment505";
import type { FragmentToken506 } from "./fragment506";

export const FRAGMENT_507 = gql(`
  fragment Fragment507 on Member226 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_226
    memberCount_226
    memberMetric_226
  }
`);

type FragmentResult507 = ResultOf<typeof FRAGMENT_507>;
type FragmentSelf507 = NonNullable<FragmentResult507>;

export type FragmentToken507 =
  | FragmentSelf507["__typename"]
  | FragmentSelf507["typenameHint"] | FragmentToken505 | FragmentToken506;
